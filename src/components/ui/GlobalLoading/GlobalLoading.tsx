const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="size-15 border-[5px] border-primary-300 border-t-gray-300/50 rounded-full animate-spin"></div>
    </div>
  );
};

export default GlobalLoading;
