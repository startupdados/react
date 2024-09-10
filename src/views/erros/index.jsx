import React, { useState } from "react";
import { Box } from "@mui/material";
import ClientErrorSquare from "./ClientErrorSquare";
import ErrorModal from "./ErrorModal";

const ErrorPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  // Funções para abrir e fechar o modal
  const handleOpen = (client) => {
    setSelectedClient(client);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const errorData = [
    {
      clientSigla: "CLT1",
      clientName: "Cliente Um com Nome Longo",
      errorCount: 3,
      errors: [
        { type: "lock", description: "Erro de lock no sistema", count: 2 },
        { type: "standby", description: "Erro de standby prolongado", count: 1 },
      ],
    },
    {
      clientSigla: "CLT2",
      clientName: "Cliente Dois",
      errorCount: 0,
      errors: [],
    },
    {
      clientSigla: "CLT3",
      clientName: "Cliente Três",
      errorCount: 2,
      errors: [
        { type: "lock", description: "Erro de lock crítico", count: 1 },
        { type: "standby", description: "Erro de standby alto", count: 1 },
      ],
    },
    {
      clientSigla: "CLT4",
      clientName: "Cliente Quatro",
      errorCount: 1,
      errors: [{ type: "lock", description: "Erro de lock leve", count: 1 }],
    },
    {
      clientSigla: "CLT5",
      clientName: "Cliente Cinco",
      errorCount: 0,
      errors: [],
    },
  ];

  // Ordenar o array pelo número de erros (errorCount), em ordem decrescente
  const sortedErrorData = errorData.sort((a, b) => b.errorCount - a.errorCount);

  return (
    <Box
      padding={2}
      display="flex"
      flexWrap="wrap"
      justifyContent={{ xs: 'center', md: 'center', lg: 'flex-start' }} // Centraliza nas telas pequenas e alinha à esquerda nas grandes
    >
      {sortedErrorData.map((clientError, index) => (
        <ClientErrorSquare
          key={index}
          clientSigla={clientError.clientSigla}
          clientName={clientError.clientName}
          errorCount={clientError.errorCount}
          errors={clientError.errors}  // Passe os erros como prop
          onClick={() => handleOpen(clientError)}
        />
      ))}

      {/* Modal para exibir informações detalhadas */}
      <ErrorModal open={open} onClose={handleClose} selectedClient={selectedClient} />
    </Box>
  );
};

export default ErrorPage;
