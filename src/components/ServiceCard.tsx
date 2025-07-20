// components/ServiceCard.tsx
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function ServiceCard({ title, icon, children }: Props) {
  return (
    <Card className="rounded-xl border-0 shadow-md bg-white hover:shadow-xl transition duration-200 group cursor-pointer min-h-[270px] flex flex-col items-center py-6 px-4">
      {icon}
      <CardContent className="p-0 flex-1 flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-3 text-primary group-hover:text-gold text-center">{title}</h3>
        <div className="mb-2 text-gray-700 text-center">{children}</div>
      </CardContent>
    </Card>
  );
}
