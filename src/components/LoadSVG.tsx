/// <reference types="vite-plugin-svgr/client" />
import RankLeader from '../assets/images/rank_leader.svg?react';
import RankSideKick from '../assets/images/rank_sidekick.svg';

const svgMap = {
    rank_leader: RankLeader,
    rank_sidekick: RankSideKick,
} as const;

export type SvgKey = keyof typeof svgMap;

interface Props {
    name: SvgKey;
    height?: number;
    width?: number;
    color?: string;
    title?: string;
}

const LoadSVG = ({
    name,
    color = 'black',
    height = 50,
    width = 50,
    title,
}: Readonly<Props>) => {
    const SvgComponent = svgMap[name];

    return SvgComponent ? (
        <SvgComponent
            width={width}
            height={height}
            color={color}
            title={title}
        />
    ) : null;
};

export default LoadSVG;
