import { ReactNode } from 'react';

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  onConfirm?: () => void;
  title?: string;
  children: ReactNode;
  confirmText?: string;
  cancelText?: string;
}
