import {useCallback, useEffect, useState} from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";
import {Link} from 'react-router-dom'

import api from '../../services/api';

export default function Main() {
    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    // Did mount - buscar
    useEffect(() => {
        const repoStorage = localStorage.getItem('repos');
        console.log(repoStorage);
        if (repoStorage) {
            console.log("recuperando...")
            console.log(JSON.parse(repoStorage));
            setRepositorios(JSON.parse(repoStorage));
        }
    }, []);

    // Did update - salvar alteracoes
    useEffect(() => {
        console.log("Salvando...")
        localStorage.setItem('repos', JSON.stringify(repositorios));
    }, [repositorios]);

    const handleSubmit = useCallback((e)=>{       
        e.preventDefault(); // nao atualiza a pagina 

        async function submit() {
            setLoading(true);
            setAlert(null);
            try {
                if (newRepo === '') {
                    throw new Error('Voce precisa indicar um repositorio!');
                }

                const response = await api.get(`repos/${newRepo}`);

                const hasRepo = repositorios.find(repo => repo.name === newRepo);
                if (hasRepo) {
                    throw new Error('Repositorio duplicado!');
                }
                //console.log(response.data);

                const data = {
                    name: response.data.full_name,
                }
                setRepositorios([...repositorios, data]);
                setNewRepo('');
            } catch(error) {
                setAlert(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
  
        submit();
    }, [newRepo, repositorios]);

    function handleInputChange(e){
        setNewRepo(e.target.value);
        setAlert(null); // quando o usuario comecar a digitar o repo, vai desmarcar a cor que sinaliza error
    }

    const handleDelete = useCallback((repo)=> {
        const find = repositorios.filter(r => r.name !== repo);
        setRepositorios(find);
    }, [repositorios]);

    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                Meus repositorios
            </h1>

            <Form onSubmit={handleSubmit} error={alert}>
                <input 
                    type="text" 
                    placeholder="Adicionar Repositorios"
                    value={newRepo}
                    onChange={handleInputChange}
                />
                <SubmitButton loading={loading ? 1:0}>
                    {loading ? (
                        <FaSpinner color="#FFF" size={14} />
                    ) : (
                        <FaPlus color="#FFF" size={14} />
                    )}
                </SubmitButton>
            </Form>
            <List>
                {repositorios.map(repo => (
                    <li key={repo.name}>
                        <span>
                            <DeleteButton onClick={()=>handleDelete(repo.name)}>
                                <FaTrash size={14} />
                            </DeleteButton>
                            {repo.name}
                        </span>
                        <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
                            <FaBars size={20}/>
                        </Link>
                    </li>
                ))}
            </List>
        </Container>
    )
}
