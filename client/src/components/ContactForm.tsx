import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Link } from "wouter";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  landSize: z.string().min(1, "Please select land size"),
  modelPreference: z.string().min(1, "Please select a model preference"),
  leadSource: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  source?: string;
}

export default function ContactForm({ source = "contact" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      landSize: "",
      modelPreference: "",
      leadSource: source,
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setIsSuccessDialogOpen(true);
      form.reset();
    } catch (error) {
      alert("Submission failed. Please email us at heritagehubnepal@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-16 bg-[#F8F4E9]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[40px] font-semibold text-[#1A3A2A] mb-4">
            Get Your Free Assessment
          </h2>
          <p className="text-lg text-[#6B5D56]">
            Share your details and we'll help you choose the perfect farm model
          </p>
        </div>

        <Card className="p-8 sm:p-10 shadow-xl bg-white">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <input type="hidden" name="leadSource" value={source} />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium text-[#6B5D56] uppercase tracking-wide">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        className="w-full bg-[#F8F4E9] border border-[#E0E0E0] focus:border-[#2E5E3E] rounded-lg py-3 px-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium text-[#6B5D56] uppercase tracking-wide">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="9800000000"
                        className="w-full bg-[#F8F4E9] border border-[#E0E0E0] focus:border-[#2E5E3E] rounded-lg py-3 px-4"
                        {...field}
                      />
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
                    <FormLabel className="text-[14px] font-medium text-[#6B5D56] uppercase tracking-wide">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full bg-[#F8F4E9] border border-[#E0E0E0] focus:border-[#2E5E3E] rounded-lg py-3 px-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="landSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium text-[#6B5D56] uppercase tracking-wide">
                      Available Land Size
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-[#F8F4E9] border border-[#E0E0E0] rounded-lg py-3 px-4">
                          <SelectValue placeholder="Select land size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="4-anna">4 Anna</SelectItem>
                        <SelectItem value="5-anna">5 Anna</SelectItem>
                        <SelectItem value="6-anna">6 Anna</SelectItem>
                        <SelectItem value="more">More than 6 Anna</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="modelPreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium text-[#6B5D56] uppercase tracking-wide">
                      Model Preference
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-[#F8F4E9] border border-[#E0E0E0] rounded-lg py-3 px-4">
                          <SelectValue placeholder="Select preference" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="self">Self-Managed</SelectItem>
                        <SelectItem value="managed">Heritage Hub Managed</SelectItem>
                        <SelectItem value="undecided">Need Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#C44536] text-white px-8 py-4 rounded-lg hover-elevate active-elevate-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Assessment Request"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>

      {/* Success Dialog */}
      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#1A3A2A]">
              Thank You!
            </DialogTitle>
            <DialogDescription className="text-[#6B5D56] mt-2">
              Your free farm assessment request has been received.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-3">
            <p className="text-sm text-[#6B5D56]">
              We’ll contact you within <strong>24 hours</strong> to discuss your mushroom farming options.
            </p>
            <p className="text-sm text-[#6B5D56]">
              In the meantime, explore our{" "}
              <Link href="/farm-models" className="text-[#2E5E3E] hover:underline">
                farm models
              </Link>
              .
            </p>
            <div className="text-xs text-[#6B5D56] bg-[#F8F4E9] p-3 rounded-md mt-3">
              Didn’t get a confirmation email? Check spam, or contact us directly at{" "}
              <br />
              <a
                href="mailto:heritagehubnepal@gmail.com"
                className="text-[#C44536] hover:underline"
              >
                heritagehubnepal@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => setIsSuccessDialogOpen(false)}
              className="bg-[#C44536] hover:bg-[#b03e30]"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
