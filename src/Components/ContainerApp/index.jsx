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

import { Header } from '../Header'
import style from './styles.module.scss'
import {
    ConatinerHeader,
    ContainerContent,
    ContainerDivider,
    ContainerForm,
    ContainerMain,
    ContainerStepForm,
} from '../../Styleds/Main.styled'
import { useForm } from '../../Context/hook/useForm'

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

export const ContainerApp = ({ children }) => {
    const steps = getSteps()
    const { state } = useForm()

    return (
        <ContainerMain>
            <ConatinerHeader>
                <Header hasSequenceOfProcesses title="Registro de Transações" />
            </ConatinerHeader>
            <ContainerContent>
                <ContainerStepForm>
                    <Stepper activeStep={state.currentStep} orientation="vertical">
                        {steps.map((stepItem, index) => {
                            return (
                                <Step key={index}>
                                    <StepLabel>{stepItem}</StepLabel>
                                </Step>
                            )
                        })}
                    </Stepper>
                    <ContainerDivider>
                        <Divider orientation="vertical" variant="fullWidth" />
                    </ContainerDivider>
                    <ContainerForm>{children}</ContainerForm>
                </ContainerStepForm>
            </ContainerContent>
        </ContainerMain>
        // <Container className={style.displayContainer}>
        //     <Stepper
        //         activeStep={state.currentStep}
        //         orientation="vertical"
        //         className={style.displayStepper}
        //     >
        //         {steps.map((stepItem, index) => {
        //             return (
        //                 <Step key={index}>
        //                     <StepLabel>{stepItem}</StepLabel>
        //                 </Step>
        //             )
        //         })}
        //     </Stepper>
        //     <Divider
        //         orientation="vertical"
        //         variant="middle"
        //         flexItem
        //         className={style.displayDivider}
        //     />
        //     <Container className={style.displayForm}>{children}</Container>
        // </Container>
        // </Paper>
    )
}
