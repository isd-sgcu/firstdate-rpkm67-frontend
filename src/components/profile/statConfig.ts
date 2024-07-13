import Aspect from '@public/stat/aspect.svg';
import Creative from '@public/stat/creative.svg';
import Doing from '@public/stat/doing.svg';
import Commu from '@public/stat/commu.svg';
import AspectFull from '@public/stat/aspect-white.svg';
import CreativeFull from '@public/stat/creative-white.svg';
import DoingFull from '@public/stat/doing-white.svg';
import CommuFull from '@public/stat/commu-white.svg';

interface StatConfig {
  icon: string[];
  color: string[];
  label: string;
  text: string;
  maxPoint: number;
}

export const statConfig: { [key: string]: StatConfig } = {
  pointA: {
    icon: [Aspect, AspectFull],
    color: [
      'bg-project-apricot',
      'from-project-apricot to-project-cream',
      'from-project-apricot via-90% via-project-cream to-white',
    ],
    label: 'A',
    text: 'เปิดมุมมองความคิด',
    maxPoint: 10,
  },
  pointB: {
    icon: [Creative, CreativeFull],
    color: [
      'bg-project-fuchsia',
      'from-project-fuchsia to-project-pink',
      'from-project-fuchsia via-90% via-project-pink to-white',
    ],
    label: 'B',
    text: 'ลงมือทำจริง',
    maxPoint: 8,
  },
  pointC: {
    icon: [Doing, DoingFull],
    color: [
      'bg-project-blue',
      'from-project-blue to-project-light-blue',
      'from-project-blue via-90% via-project-light-blue to-white',
    ],
    label: 'C',
    text: 'เพิ่มทักษะการสื่อสาร',
    maxPoint: 5,
  },
  pointD: {
    icon: [Commu, CommuFull],
    color: [
      'bg-project-brown',
      'from-project-brown to-project-apricot',
      'from-project-brown via-90% via-project-apricot to-white',
    ],
    label: 'D',
    text: 'เปิดความคิดสร้างสรรค์',
    maxPoint: 8,
  },
};
