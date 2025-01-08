import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const QuestionTabs = () => {
  return (
    <Tabs defaultValue="problem" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="problem">Problem</TabsTrigger>
        <TabsTrigger value="solution">Solution</TabsTrigger>
        <TabsTrigger value="quote">Quote</TabsTrigger>
      </TabsList>
      
      <TabsContent value="problem" className="mt-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border min-h-[200px]">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
            What is the probability of rolling a 15 in a single roll of a fair 25-sided die?
          </h3>
        </div>
      </TabsContent>
      
      <TabsContent value="solution" className="mt-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border min-h-[400px]">
          <p className="text-gray-700">
            To find the probability of rolling a 15 on a fair 25-sided die:
            <br /><br />
            1. Each number has an equal chance of being rolled
            <br />
            2. There is only one way to roll a 15
            <br />
            3. There are 25 possible outcomes
            <br /><br />
            Therefore, the probability is 1/25 or 0.04 or 4%
          </p>
        </div>
      </TabsContent>
      
      <TabsContent value="quote" className="mt-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border min-h-[400px]">
          <blockquote className="text-gray-700 italic">
            "Mathematics is not about numbers, equations, computations, or algorithms: 
            it is about understanding." - William Paul Thurston
          </blockquote>
        </div>
      </TabsContent>
    </Tabs>
  );
};