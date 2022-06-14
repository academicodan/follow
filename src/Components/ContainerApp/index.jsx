import React, { useState, useEffect, Children } from 'react'
import {
    Typography,
    Stepper,
    Step,
    StepLabel,
    Button,
    TextField,
    Divider,
    Paper,
    Container,
} from '@material-ui/core'

import { useForm } from '../../Context/FormContext'
import { Header } from '../Header'
import style from './styles.module.scss'

function getSteps() {
    return [
        'Fármacos',
        'Laboratório(Lotes)',
        'Fábrica',
        'Sistema de embalagem',
        'Controladoria de Peso',
        'Testes',
        'Distribuidora',
    ]
}

export const ContainerApp = ({ children, notStep }) => {
    const steps = getSteps()
    const { state } = useForm()

    return (
        <Paper style={{ height: '100vh' }}>
            <Header />
            <Container className={style.displayContainer}>
                {!notStep && (
                    <>
                        <Stepper
                            activeStep={state.currentStep}
                            orientation="vertical"
                            className={style.displayStepper}
                        >
                            {steps.map((stepItem, index) => {
                                return (
                                    <Step key={index}>
                                        <StepLabel>{stepItem}</StepLabel>
                                    </Step>
                                )
                            })}
                        </Stepper>
                        <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                            className={style.displayDivider}
                        />
                    </>
                )}
                <Container className={style.displayForm}>{children}</Container>
            </Container>
        </Paper>
    )
}
