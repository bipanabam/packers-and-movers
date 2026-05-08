import { ShieldCheck } from "lucide-react";

interface FormSectionProps {
  step: number;
  title: string;
  description?: string;
  children: React.ReactNode;
}

const FormSection = ({
  step,
  title,
  description,
  children,
}: FormSectionProps) => {
  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm w-full">
      <div className="flex items-start gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-semibold">
          {step}
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-foreground">
            {title}
          </h2>

          {description && (
            <p className="text-sm text-foreground/60">
              {description}
            </p>
          )}
        </div>
      </div>

      {children}
      
      <div className="flex items-center gap-2 text-xs text-foreground/50">
        <ShieldCheck size={14} />
        Your details are secure and never shared.
      </div>
    </section>
  );
};

export default FormSection;