interface ModalAvisoProps {
  isOpen: boolean;
  closeModal: () => void;
  message: string;
}

const ModalAviso: React.FC<ModalAvisoProps> = ({
  isOpen,
  closeModal,
  message,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
            <h2 className="text-xl font-bold text-center mb-4">Cooperativa Selecionada com sucesso </h2>
            <p className="text-center mb-6">{message}</p>
            <div className="flex justify-center">
              <button
                onClick={closeModal}
                className="bg-green-500 text-white px-6 py-2 rounded-md"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalAviso;
