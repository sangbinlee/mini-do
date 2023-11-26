import { myAxios } from "@/lib/data-fetcher";
import { addFormSchema } from "@/schema/todo";
import { TodoFormType } from "@/types/todo";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SaveIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const FormComponent = () => {
    const queryClient = useQueryClient();
    const form = useForm<TodoFormType>({
        resolver: zodResolver(addFormSchema),
        defaultValues: {
            todoItem: "",
        },
    });

    const onSubmit = (values: TodoFormType) => {
        addItem.mutate(values.todoItem);
        form.reset();
    };

    const addItem = useMutation({
        mutationFn: async (title: string) => {
            await myAxios.post("/todos", {
                title: title,
            });
        },
        onSuccess: () => {
            // queryClient.invalidateQueries(["todos"]);
            // `todos`로 시작하는 키로 모든 쿼리를 무효화함
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });
    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="border-2 my-4 flex flex-col justify-center content-center mx-4 md:mx-10 p-10 rounded-md shadow-md shadow-accent font-semibold h-[50vh]"
                >
                    <FormField
                        control={form.control}
                        name="todoItem"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex justify-center">
                                    <FormLabel className="text-xl font-bold">
                                        Todo Item
                                    </FormLabel>
                                </div>
                                <FormControl className="p-6">
                                    <Input
                                        placeholder="eg. Go to school at the morning"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-center pb-2" />
                            </FormItem>
                        )}
                    />
                    <Tooltip>
                        <div className="flex justify-center">
                            <TooltipTrigger className="w-fit">
                                <Button type="submit" className="px-20 mt-4">
                                    <SaveIcon /> Save
                                </Button>
                            </TooltipTrigger>
                        </div>
                        <TooltipContent>
                            <p className="capitalize">Saves a new Todo</p>
                        </TooltipContent>
                    </Tooltip>
                </form>
            </Form>
            {process.env.NODE_ENV !== "production" && (
                <DevTool control={form.control} />
            )}
        </>
    );
};

export default FormComponent;
