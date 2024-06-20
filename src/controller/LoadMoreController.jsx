import React from 'react';
import LoadModeView from '../view/LoadModeView';
import { useSearchParams } from 'react-router-dom';

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    // Güncel sayfa sayısını al
    const pageNumber = params.get("page") || 1;

    // URL'i güncelle
    setParams({ page: Number(pageNumber) + 1 });
  };

  return <LoadModeView handleClick={handleClick} />;
};

export default LoadMoreController;
