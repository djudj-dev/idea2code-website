import { Typography } from '@/components/typography';
import { Badge } from '@/components/ui/badge';
import * as TechIcon from '@/components/icons/tech';

const { Text } = Typography;

export const TechBadge = ({ tech, setIcon }: { tech: string, setIcon?: ({ className }: { className: string }) => React.JSX.Element }) => {
    const techIconIndex = `${tech}Icon` as keyof typeof TechIcon;
    let Icon = null;

    if (Object.hasOwn(TechIcon, techIconIndex)) {
        Icon = TechIcon[techIconIndex];
    }

    if (setIcon) {
        Icon = setIcon;
    }

    return (
        <Badge variant={'outline'} data-cy={`tech-badge-${tech}`} className="m-1 rounded-full sm:border">
            {Icon ? <Icon className="mx-0.5 md:mx-1 size-3! md:size-5!" /> : <span className="mx-1 h-5"></span>}
            <Text className="!my-1.5 font-bold leading-none md:text-base mr-1 md:mr-2">{tech}</Text>
        </Badge>
    );
};