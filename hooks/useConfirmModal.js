// hooks/useConfirmModal.js
"use client";

import { useState, useCallback } from "react";

/**
 * Usage :
 * const confirm = useConfirmModal();
 *
 * confirm.open({
 *   title: "Supprimer cet article ?",
 *   description: "Cette action est irréversible.",
 *   variant: "danger",
 *   confirmLabel: "Supprimer",
 *   onConfirm: async () => { await deleteActu(id); },
 * });
 *
 * <ConfirmModal {...confirm.props} />
 */
export function useConfirmModal() {
  const [state, setState] = useState({
    open: false,
    loading: false,
    config: {},
  });

  const open = useCallback((config) => {
    setState({ open: true, loading: false, config });
  }, []);

  const close = useCallback(() => {
    setState((s) => (s.loading ? s : { ...s, open: false }));
  }, []);

  const onConfirm = useCallback(async () => {
    if (!state.config.onConfirm) return;
    setState((s) => ({ ...s, loading: true }));
    try {
      await state.config.onConfirm();
      setState((s) => ({ ...s, open: false, loading: false }));
    } catch {
      setState((s) => ({ ...s, loading: false }));
    }
  }, [state.config]);

  return {
    open,
    close,
    props: {
      open: state.open,
      loading: state.loading,
      onClose: close,
      onConfirm,
      title: state.config.title,
      description: state.config.description,
      confirmLabel: state.config.confirmLabel,
      cancelLabel: state.config.cancelLabel,
      variant: state.config.variant,
    },
  };
}
