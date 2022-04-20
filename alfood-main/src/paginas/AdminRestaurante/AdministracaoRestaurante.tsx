import { useState } from "react";
import IRestaurante from "../../interfaces/IRestaurante";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const AdministracaoRestaurante = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
                <strong>Nome</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>
                    <strong>Nome</strong>
                </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdministracaoRestaurante;
