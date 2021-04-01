import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import {
  Table, TableBody, TableCell, TableRow, TableHead,
  TableContainer, Paper, makeStyles, Container,
  Typography, Grid, IconButton, Button
} from '@material-ui/core';
import {Edit, Delete, Eco} from '@material-ui/icons';
import {ScaleLoader} from 'react-spinners';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import {getLocalidades, addLocalidade, getLocalidade, updateLocalidade, deleteLocalidade} from '../data/LocalidadeData';
import {NovaLocalidade} from './NovaLocalidade';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Conect from '../store/config/conect';
import { pushLocalidade } from '../store/localidadeProfile';

const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: 'rgb(51, 102, 255)';
  }
.Toastify__toast--success {
    background: 'rgb(51, 187, 102)';
  }
.Toastify__toast--warning {
    background: 'rgb(254, 255, 20)';
  }
.Toastify__toast--error {
    background: 'rgb(255, 102, 102)';
  }
`;

const Localidades = ({type, message, dispatch}) => {

  const classes = useStyles();
  const [localidades, setLocalidades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formMode, setFormMode] = useState(true);
  const [locId, setLocId] = useState('');
  const [nome_agricultor, setNomeAgricultor] = useState('');
  const [nome_propriedade, setNomePropriedade] = useState('');
  const [cultura, setCultura] =  useState('');
  const [talhao, setTalhao] = useState('');
  const history = useHistory();
  const override =`display: flex; align-items: center; justify-content: center; border-color: red;`;

  const handleClose = () => {
    setOpen(false);
  }
  const handleNomeAgricultor = (event) => {
    setNomeAgricultor(event.target.value);
  }
  const handleNomePropriedade = (event) => {
    setNomePropriedade(event.target.value);
  }
  const handleCultura = (event) => {
    setCultura(event.target.value);
  }
  const handleTalhao = (event) => {
    setTalhao(event.target.value);
  }
  const getlist = async () => { 
    try {
      setLoading(true);
      const list = await getLocalidades();
      setLocalidades(list);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }
  const getOneLocalidade = async (id) => {
    try {
      setFormMode(false);
      setLocId(id);
      const response = await getLocalidade(id);
        setNomeAgricultor(response.nome_agricultor);
        setNomePropriedade(response.nome_propriedade);
        setCultura(response.cultura);
        setTalhao(response.talhao);
        setOpen(true);
    } catch (error) {
      toast.error(error.message);
    }
  }
  const deleteHandler = async (id) => {
    try {
      await deleteLocalidade(id);
      getlist();
      toast.success('Localidade Deletada');
    } catch (error) {
      toast.error(error.message);
    }
  }
  const handleAdd = () => {
    setOpen(true);
    setFormMode(true);
    setNomeAgricultor('');
    setNomePropriedade('');
    setCultura('');
    setTalhao('');
  }

  const addLocalidadeHandler = async () => {
    try {
      const localidade = {
        nome_agricultor,
        nome_propriedade,
        cultura,
        talhao
      }
      if (formMode) {
        await addLocalidade(localidade);
        toast.success('Localidade Adicionada!');
        getlist();
        setOpen(false);
        setNomeAgricultor('');
        setNomePropriedade('');
        setCultura('');
        setTalhao(''); 
      }else {
        await updateLocalidade(locId, localidade);
        toast.success('Editado com sucesso!');
        getlist();
        setOpen(false);
        setNomeAgricultor('');
        setNomePropriedade('');
        setCultura('');
        setTalhao(''); 
      }
    } catch (error) {
        toast.error(error.message);
    }
  }
  //TOASTI
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }

  useEffect(() => {
    getlist();
  }, []);

  const pushDataLocalidade = localidade =>{
    dispatch(pushLocalidade(localidade));
    history.push('/dashboard');
  }

  return (
    <Container className={classes.container}>
      <Toast />
      <TableContainer component={Paper}>
          <Grid container>
              <Grid item xs={8}>
              <Typography className={classes.title} variant="h6" component="div">
                  Todas as Localidades
              </Typography>
              </Grid>
          </Grid>
          <Table className={classes.table}>
              <TableHead>
                  <TableRow>
                      <TableCell className={classes.head}>Agricultor</TableCell>
                      <TableCell className={classes.head}>Propriedade</TableCell>
                      <TableCell className={classes.head}>cultura</TableCell>
                      <TableCell className={classes.head}>Talhão</TableCell>
                      <TableCell className={classes.head}>Ações</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {localidades.length === 0 ? (
                      <TableRow>
                          <TableCell colSpan={7}>
                              <ScaleLoader 
                              css={override}
                              size={150}
                              color={"#149879"}
                              loading={loading}/>
                          </TableCell>
                      </TableRow>
                  ) : (
                      <>
                      {localidades.map((cust) => (
                          <TableRow key={cust.id}>
                            <TableCell>{cust.nome_agricultor}</TableCell>
                            <TableCell>{cust.nome_propriedade}</TableCell>
                            <TableCell>{cust.cultura}</TableCell>
                            <TableCell>{cust.talhao}</TableCell>
                            <TableCell>
                              <IconButton onClick={() => getOneLocalidade(cust.id)} color="primary" aria-label="update locality">
                                      <Edit />
                              </IconButton>
                              <IconButton 
                                  onClick={() => {if(window.confirm("Deseja Deletar esta localidade?")) {deleteHandler(cust.id)};}} 
                                  color="secondary" 
                                  aria-label="delete locality">                
                                  <Delete />
                              </IconButton>
                                  <Button 
                                    onClick={() => pushDataLocalidade(cust)}
                                    style={{color: "#1FAA89"}} >
                                    <Eco/>Monitorar
                                  </Button>                                
                            </TableCell>
                        </TableRow>
                      ))}    
                      </>
                  )}
              </TableBody>
          </Table>  
      </TableContainer>
      <NovaLocalidade
          open={open} 
          close={handleClose}
          formmode={formMode}
          nome_agricultor={nome_agricultor}
          nome_propriedade={nome_propriedade}
          cultura={cultura}
          talhao={talhao}
          changeNomeAgricultor={handleNomeAgricultor}
          changeNomePropriedade={handleNomePropriedade}
          changeCultura={handleCultura}
          changeTalhao={handleTalhao}
          addLocalidade = {addLocalidadeHandler}
      />

      <Fab onClick={handleAdd} aria-label="add" className={classes.fab}>
        <AddIcon/>
      </Fab>

  </Container>
  );
};

export default Conect(Localidades);

const useStyles = makeStyles((theme) => ({
  //layout
  container: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(9),

  },
  horizontalPaper: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  verticalPaper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    display: "flex",
   
    flexDirection: "column",
    alignItems: "center",
    },
  //tabela
  table: {
      minWidth: 650,
  }, 
  title: {
      flex: '1 1 100%',
      padding: '20px'
  },
  head: {
      backgroundColor: '#1FAA89',
      color: theme.palette.common.white,
  },
  //buttons
  button: {
      margin: theme.spacing(1),
      float: 'right',
  },
  fab: {
      position: 'fixed',
      backgroundColor: '#1FAA89',
      '&:hover': { backgroundColor: '#149879',},
      color: '#ffffff',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
}));