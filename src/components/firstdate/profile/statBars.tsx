import ProgressDisplay from './ProgressDisplay';
import { ProgressDisplayProps } from './ProgressDisplay';
import { Stamp } from '@/types/stamp';

interface StatBarsProps {
  stamp: Stamp;
}

export default function StatBars({ stamp }: StatBarsProps) {
  const progressBars: ProgressDisplayProps[] = [
    { point: stamp?.pointA || 0, type: 'pointA' },
    { point: stamp?.pointB || 0, type: 'pointB' },
    { point: stamp?.pointC || 0, type: 'pointC' },
    { point: stamp?.pointD || 0, type: 'pointD' },
  ];

  return (
    <div className="flex justify-evenly gap-6">
      {progressBars.map((props, index) => (
        <ProgressDisplay
          key={index}
          {...props}
        />
      ))}
    </div>
  );
}
