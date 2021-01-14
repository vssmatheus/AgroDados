import React from "react"; //{ useCallback }
import '../css/styles.css';
import {Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid} from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export const NovaLocalidade = (props) => {

    /* const onSubmitCallBack = useCallback(
        () => {
            props.addLocalidade();
        },
        [],
      ); */

    return (
        <Dialog
        fullWidth={true}
        maxWidth='md'
        open={props.open}
        onClose={props.close}
        aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>{props.formmode ?  'Adicionar nova' : 'Editar'}  localidade</DialogTitle>
            <ValidatorForm
            //  onSubmit={onSubmitCallBack}
                onSubmit={props.addLocalidade}
            >
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Nome do Agricultor"
                            onChange={props.changeNomeAgricultor}
                            name="nome_agricultor"
                            value={props.nome_agricultor}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Nome da Propriedade"
                            onChange={props.changeNomePropriedade}
                            name="nome_propriedade"
                            value={props.nome_propriedade}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Cultura"
                                onChange={props.changeCultura}
                                name="cultura"
                                value={props.cultura}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Talhão"
                                onChange={props.changeTalhao}
                                name="talhao"
                                value={props.talhao}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" color="secondary">
                       {props.formmode ? 'Adicionar' : 'Editar'}
                    </Button>
                    <Button onClick={props.close} color="primary">
                        Cancelar
                    </Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
};


