import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare } from "lucide-react";

// ui
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// context
import { useAppContext } from "@/context/AppContext";

const userInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
});

type UserInfoFormValues = z.infer<typeof userInfoSchema>;

export default function UserInformation() {
  const { setFormState, toast } = useAppContext();
  const form = useForm<UserInfoFormValues>({
    resolver: zodResolver(userInfoSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
    },
     mode: "onChange",
  });
  const onSubmit = (values: UserInfoFormValues) => {
    console.log(values)
    setFormState(form.formState.isValid);
    toast.success("address details added");
  };

  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full border rounded-2xl"
      >
        <AccordionItem value="item-1" className=" px-6 ">
          <AccordionTrigger>
            {" "}
            <div className="flex items-center gap-2">
              <MessageSquare />
              Add note for the courier
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-6 text-balance">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123 Main St, City, Country"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
