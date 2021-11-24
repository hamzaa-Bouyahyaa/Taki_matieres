import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();

export default function Form(props) {


    const [data, setData] = useState({
        title: "",
        text: ""
    })





    const handleSubmit = async (event) => {
        event.preventDefault();
        await props.setCards([...props.cards, { title: data.title, text: data.text }]);
        toast(`Votre Carte de Titre "${data.title}" a été ajouté avec succes`)
        await props.setNumbMatiere((prevState) => prevState + 1)

    };

    return (
        <Paper>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            // marginTop: '20px'
                        }}
                    >

                        <Typography variant="substitle2" style={{
                            color: '#13197c',
                            fontWeight: 'bold'
                        }}>
                            Ajouter une matière
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="nom"
                                label="Nom"
                                name="nom"
                                autoComplete="nom"
                                autoFocus
                                onChange={(e) => setData({ ...data, title: e.target.value })}
                                style={{ backgroundColor: '#f1f5ff' }}

                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                fullWidth
                                rows={5}
                                onChange={(e) => setData({ ...data, text: e.target.value })}
                                style={{ backgroundColor: '#f1f5ff' }}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{
                                    backgroundColor: '#13197c'
                                }}
                                onClick={handleSubmit}
                            >
                                Ajouter
                            </Button>
                            <ToastContainer
                                position="top-right"
                                autoClose={3000}
                                info
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme='dark' />
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </Paper>

    );
}