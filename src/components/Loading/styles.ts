import styled from 'styled-components';

interface ISkeletonElementStyledProps {
  $height: string;
  $width: string;
}

export const SkeletonElement = styled.div<ISkeletonElementStyledProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  border-radius: 8px;
  animation: shimmer 2.5s infinite linear;

  @keyframes shimmer {
    from {
      background-position: -200% 0;
    }
    to {
      background-position: 200% 0;
    }
  }
`;
