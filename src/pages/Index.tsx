import { Editor } from "@/components/Editor";
import { Sidebar } from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <Editor />
    </div>
  );
};

export default Index;