// hooks/useNotifications.js
"use client";

import { useState, useEffect } from "react";

export function useNotifications(intervalMs = 30000) {
  const [data, setData] = useState({
    total: 0,
    details: { messages: 0, devis: 0 },
  });
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const res = await fetch("/api/notifications");
      if (res.ok) setData(await res.json());
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs]);

  return { ...data, loading, refetch: fetchNotifications };
}
