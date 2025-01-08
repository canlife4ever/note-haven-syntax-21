import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, ArrowRight as GoIcon } from "lucide-react";

interface QuestionNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  goToQuestion: string;
  onGoToQuestionChange: (value: string) => void;
  onGoToQuestion: () => void;
}

export const QuestionNavigation = ({
  onPrevious,
  onNext,
  goToQuestion,
  onGoToQuestionChange,
  onGoToQuestion,
}: QuestionNavigationProps) => {
  return (
    <div className="flex items-center justify-between mt-8">
      <Button
        variant="outline"
        onClick={onPrevious}
        className="rounded-full border-[#48D1CC] bg-[#48D1CC] hover:bg-[#48D1CC]/90"
      >
        <ArrowLeft className="h-4 w-4 text-black font-normal" />
      </Button>

      <div className="relative max-w-[200px]">
        <Input
          type="text"
          placeholder="Go to question..."
          value={goToQuestion}
          onChange={(e) => onGoToQuestionChange(e.target.value)}
          className="rounded-full border-[#48D1CC] pr-10"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-[#48D1CC]/10"
          onClick={onGoToQuestion}
        >
          <GoIcon className="h-4 w-4 text-black font-normal" />
        </Button>
      </div>

      <Button
        variant="outline"
        onClick={onNext}
        className="rounded-full border-[#48D1CC] bg-[#48D1CC] hover:bg-[#48D1CC]/90"
      >
        <ArrowRight className="h-4 w-4 text-black font-normal" />
      </Button>
    </div>
  );
};