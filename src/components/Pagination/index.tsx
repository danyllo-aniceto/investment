import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RenderPageNumbers } from './components/RenderPagesNumber';
import { IPaginationProps } from './types';
import { PaginationContainer, ArrowButton, ArrowIcon } from './styles';

export function Pagination({
  page = 1,
  totalPages = 10,
  onPageChange,
}: Readonly<IPaginationProps>) {
  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  const handlePrevious = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      handlePageChange(page + 1);
    }
  };

  return (
    <PaginationContainer>
      <ArrowButton
        onClick={handlePrevious}
        $disabled={page === 1}
        data-testid="arrow-left-pagination-button"
      >
        <ArrowIcon as={FaArrowLeft} $disabled={page === 1} />
      </ArrowButton>

      <RenderPageNumbers handlePageChange={handlePageChange} page={page} totalPages={totalPages} />

      <ArrowButton
        onClick={handleNext}
        $disabled={page === totalPages}
        data-testid="arrow-right-pagination-button"
      >
        <ArrowIcon as={FaArrowRight} $disabled={page === totalPages} />
      </ArrowButton>
    </PaginationContainer>
  );
}
