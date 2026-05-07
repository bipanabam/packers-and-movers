interface ReviewCardProps {
  title: string;
  children: React.ReactNode;
}

const ReviewCard = ({
  title,
  children,
}: ReviewCardProps) => {
  return (
    <div className="rounded-2xl border border-primary/10 bg-muted/20 p-5">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
        {title}
      </h3>

      {children}
    </div>
  );
};

export default ReviewCard;