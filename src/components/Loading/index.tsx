import { SkeletonElement } from './styles';
import { ILoadingProps } from './types';

export function Loading({ height, quantity, width }: ILoadingProps) {
  return (
    <>
      {Array.from({ length: quantity }, (_, index) => (
        <SkeletonElement key={index} $width={width} $height={height} />
      ))}
    </>
  );
}
