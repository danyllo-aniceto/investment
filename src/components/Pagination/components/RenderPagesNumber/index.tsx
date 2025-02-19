import { IRenderPagesNumberProps } from './types';
import { PageButton } from './styles';

export function RenderPageNumbers({ page, totalPages, handlePageChange }: IRenderPagesNumberProps) {
  const pagesToShow = 5;
  const startPage = Math.max(1, page - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(
    pageNumber => (
      <PageButton
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        $isActive={pageNumber === page}
        data-testid="render-page-number-button"
      >
        {pageNumber}
      </PageButton>
    ),
  );
}
