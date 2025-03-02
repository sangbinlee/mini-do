import { myAxios } from "@/lib/data-fetcher";
import { addFormSchema } from "@/schema/todo";
import { TodoFormType, TodoProps } from "@/types/todo";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BanIcon, Delete, Edit, SaveIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const TodoItem = (props: TodoProps) => {
    const queryClient = useQueryClient();
    const form = useForm<TodoFormType>({
        resolver: zodResolver(addFormSchema),
        defaultValues: {
            todoItem: "",
        },
    });
    const updateTodo = useMutation({
        mutationFn: async ({ id, title }: { id: string; title: string }) => {
            const { data: dt } = await myAxios.patch(`todos/${id}`, {
                title,
            });
            return dt;
        },
        onSuccess: () => {
            // queryClient.invalidateQueries(["todos"]);
            // `todos`로 시작하는 키로 모든 쿼리를 무효화함
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });
    const handleUpdate = ({ id, title }: { id: string; title: string }) => {
        updateTodo.mutate({ id, title });
        props.setEditId(undefined);
    };
    const onSubmit = (values: TodoFormType) => {
        const data = { id: props.todo.id, title: values.todoItem };
        handleUpdate(data);
        form.reset();
    };
    return (
        <Card className="py-4 h-[200px] hover:shadow-lg hover:shadow-secondary transition-all ease-in duration-500">
            <CardHeader>
                <CardTitle>
                    {props.editId === props.todo.id ? (
                        <>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="flex flex-col space-y-4"
                                >
                                    <FormField
                                        control={form.control}
                                        name="todoItem"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="uppercase pl-2">
                                                    Updated Todo name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder={
                                                            props.todo.title
                                                        }
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription className="pl-4 text-muted-foreground/50">
                                                    This will be your new todo
                                                    name
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex justify-center gap-2">
                                        <Tooltip>
                                            <div className="flex justify-center">
                                                <TooltipTrigger>
                                                    <Button
                                                        variant={"secondary"}
                                                        type="submit"
                                                        className="flex gap-2"
                                                    >
                                                        <SaveIcon />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">
                                                        Updates to this new todo
                                                    </p>
                                                </TooltipContent>
                                            </div>
                                        </Tooltip>
                                        <Tooltip>
                                            <div className="flex justify-center">
                                                <TooltipTrigger>
                                                    <Button
                                                        variant={"secondary"}
                                                        className="flex gap-2"
                                                        onClick={() =>
                                                            props.setEditId(
                                                                undefined
                                                            )
                                                        }
                                                    >
                                                        <BanIcon className="text-destructive/90" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">
                                                        Cancel edit
                                                    </p>
                                                </TooltipContent>
                                            </div>
                                        </Tooltip>
                                    </div>
                                </form>
                            </Form>
                            {process.env.NODE_ENV !== "production" && (
                                <DevTool control={form.control} />
                            )}
                        </>
                    ) : (
                        <>
                            <div className="flex justify-center gap-2 items-center mb-6">
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Checkbox
                                            className="hover:scale-125 ease-linear duration-200"
                                            checked={props.todo.completed}
                                            onCheckedChange={() =>
                                                props.handleToggle(props.todo)
                                            }
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="capitalize">
                                            Toggle to change completion status
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                                {props.todo.completed ? (
                                    <p className="line-through capitalize text-center">
                                        {props.todo.title}
                                    </p>
                                ) : (
                                    <p className="capitalize text-center">
                                        {props.todo.title}
                                    </p>
                                )}
                            </div>
                            <div className="flex justify-center gap-2 bottom-2 w-full left-0">
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Button
                                            variant={"secondary"}
                                            onClick={() =>
                                                props.setEditId(props.todo.id)
                                            }
                                        >
                                            <Edit className="text-primary/30" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="capitalize">Edit Title</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Button
                                            variant={"secondary"}
                                            onClick={() =>
                                                props.handleDelete(
                                                    props.todo.id
                                                )
                                            }
                                        >
                                            <Delete className="text-destructive" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="capitalize">
                                            Delete this todo
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </>
                    )}
                </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
        </Card>
    );
};

export const TodoItemSkeleton = () => {
    return (
        <Card className="relative py-4 h-[200px]">
            <CardHeader>
                <CardTitle className="flex flex-col space-y-4">
                    <div className="flex justify-center gap-2 items-center mb-6">
                        <Skeleton className="w-6 h-6" />
                        <Skeleton className="w-2/3 h-12" />
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2 justify-center">
                <Skeleton className="w-20 h-12" />
                <Skeleton className="w-20 h-12" />
            </CardContent>
        </Card>
    );
};

export const FormSkeleton = () => (
    <form className="border-2 my-4 flex flex-col justify-center content-center mx-4 md:mx-10 p-10 rounded-md shadow-md shadow-accent font-semibold h-[50vh]">
        <div>
            <div className="flex justify-center">
                <Skeleton className="text-xl font-bold h-10 w-44" />
            </div>
            <div className="p-6">
                <Skeleton className="text-xl font-bold h-10 w-full" />
            </div>
            <div className="text-center pb-2" />
        </div>
        <div className="flex justify-center">
            <Skeleton className="text-xl font-bold h-10 w-44" />
        </div>
    </form>
);
