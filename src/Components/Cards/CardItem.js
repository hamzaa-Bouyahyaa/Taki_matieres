import React from 'react';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import './Carditem.css'


export default function CardItem({ title, text, onClick }) {

  return (
    <Paper sx={{
      width: 380,
      height: 200
    }} evelation={8} style={{
      cursor: 'pointer',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '- webkit-box',
      WebkitLineLamp: 2,
      lineClamp: 2,
      WebkitBoxOrient: 'vertical'

    }}
      onClick={onClick}
      className='paper' >
      <div></div>
      <Typography variant='h3' style={{
        fontSize: '36px',
        fontWeight: 'bold',
        fontFamily: 'Tajawal',
        marginTop: '20px',
        marginBottom: '20px',
        color: '#191d75',
        marginLeft: '10px'
      }}
        className='title'>
        {title}
      </Typography>
      <Typography variant='subtitle2' style={{
        fontSize: '18px',
        fontWeight: 'bold',
        fontFamily: 'Tajawal',
        marginLeft: '10px',
        color: '#191d75'
      }} className='text'>
        {text}
      </Typography>

    </Paper >





  )

}