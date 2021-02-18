import { Table } from 'react-bootstrap';

export default function Candidate() {
    return (
        <>
            <Table responsive="sm" striped bordered hover className="shadow-sm rounded mx-auto">
                <thead>
                    <tr className="text-center bg-info text-white">
                        <th><i className="fas fa-list-ol"></i></th>
                        <th>Nome Completo</th>
                        <th>Idade</th>
                        <th>E-mail</th>
                        <th>Contato</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>Vaga</th>
                        <th>Resumo de Qualificações</th>
                        <th>Baixar CV</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mariana Andrade</td>
                        <td>22</td>
                        <td>marinaandrade@outlook.com</td>
                        <td>1111-2222</td>
                        <td>São Paulo</td>
                        <td>SP</td>
                        <td>Recepcionista</td>
                        <td>Inglês Intermediário</td>
                        <td><i className="fas fa-download" title="Clique para baixar" ></i></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Leticia Batista</td>
                        <td>26</td>
                        <td>batistaleticia@gmail.com</td>
                        <td>2222-3333</td>
                        <td>São Paulo</td>
                        <td>SP</td>
                        <td>Recepcionista</td>
                        <td>Curso de Pacote Office</td>
                        <td><i className="fas fa-download" title="Clique para baixar"></i></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Rafaela Almeida</td>
                        <td>32</td>
                        <td>rafaalmeida@hotmail.com</td>
                        <td>4444-5555</td>
                        <td>São Paulo</td>
                        <td>SP</td>
                        <td>Recepcionista</td>
                        <td>Experiência na área</td>
                        <td><i className="fas fa-download" title="Clique para baixar"></i></td>
                    </tr>

                </tbody>
            </Table>
        </>
    )
}