import React, { useState } from 'react'
import CardItem from './CardItem'
import Grid from '@mui/material/Grid'
import Form from '../Form/Form'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Cards({ numbmatiere, setNumbMatiere }) {

    const [cards, setCards] = useState([]);
    const [sub, setSub] = useState({})

    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };

  


    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title" style={{
                    color: '#13197c',
                    fontWeight: 'bold',
                    fontSize: '32px'
                }}>
                    {sub.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{
                        color: '#13197c',
                        fontSize: '24px'
                    }}>
                        {sub.text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}>
                    <Button onClick={async () => {
                        await setCards(cards.filter((card) => cards.indexOf(card) !== cards.indexOf(sub)))
                        setOpen(false)
                        await setNumbMatiere((prev) => prev - 1)

                    }

                    }
                        style={{
                            backgroundColor: '#ff5d60',
                            color: '#fff',
                            fontWeight: 'bold',

                        }}>Supprimer</Button>
                    <Button onClick={handleClose} autoFocus style={{
                        backgroundColor: '#000c84',
                        color: '#fff',
                        fontWeight: 'bold',

                    }}>
                        Fermer
                    </Button>
                </DialogActions>
            </Dialog>
            <Grid container spacing={2}>

                {cards.map((card) => {
                    return (
                        <>
                            <Grid item xs={3} key={cards.indexOf(card)}
                                style={{
                                    marginRight: '10px'
                                }}
                            >
                                <CardItem
                                    title={card.title}
                                    text={card.text}
                                    onClick={() => {
                                        setOpen(true)
                                        setSub(card)
                                    }}
                                />
                            </Grid>

                        </>
                    )
                })}

            </Grid>
            <div style={{
                position: 'fixed',
                right: '80px',
                top: '150px'
            }}>
                <Form numbmatiere={numbmatiere} setNumbMatiere={setNumbMatiere} cards={cards} setCards={setCards} />
            </div>


        </>
    )
}

export default Cards
