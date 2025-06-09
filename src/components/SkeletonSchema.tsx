import type { SkeletonSchemaProps } from "@/types/response";
import { Skeleton } from "./ui/skeleton";

const SkeletonSchema = (props: SkeletonSchemaProps) => {

  const { grid } = props;

  return Array.from({ length: grid }).map((_, index) => (
    <div key={index} className="flex flex-col mx-auto gap-8 space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  ));
};

export default SkeletonSchema;
