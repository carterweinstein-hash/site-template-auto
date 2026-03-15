interface ServiceCardProps {
  name: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ name, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
