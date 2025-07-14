import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mx-auto">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="text-xl">This is a test</p>
      <Button variant="outline">Click me</Button>
    </div>
  );
}
