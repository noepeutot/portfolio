import { Tooltip } from "./tooltip";

function getAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function formatBirthDate(birthDate: string): string {
  const date = new Date(birthDate);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function Age({ birthDate }: { birthDate: string }) {
  return (
    <Tooltip content={formatBirthDate(birthDate)}>
      {getAge(birthDate)} ans
    </Tooltip>
  );
}
