import React from "react";
import "./HowToBuy.scss"
import comprarimg from "../../assets/img/howtobuy.png"
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


function getSteps() {
    return ['Contactar con el vendedor', 'Cotizar el pedido', 'Confirmar forma de pago'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return 'Nuestro personal de ventas se comunicará inmediatamente con usted por llamada telefónica o WhatsApp.';
      case 1:
        return 'Se procede con la cotización de la compra que desea realizar de acuerdo al tipo, cantidad y ubicación para la entrega.';
      case 2:
        return 'Aceptamos pago contra entrega y transferencias. Una vez concretado el tipo de pago, procederemos a preparar el pedido.';
      default:
        return '¡Esos son todos los pasos!';
    }
  }

export default function HowToBuy(){
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    return(
        <div className="henna-container">
            <h3 className="henna-header">¿Cómo comprar?</h3>
            <div className="comprar-container">
                <div className="comprar-img-col">
                    <img className="comprar-img"src={comprarimg} alt=""/>
                </div>
                <div className="comprar-desc-col">
                    <Stepper  activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={label} >
                                <StepLabel className="label-pasos">{label}</StepLabel>
                                    <StepContent >
                                        <div className="contenido-pasos">{getStepContent(index)}</div>
                                        <div>
                                            <Button disabled={activeStep === 0} onClick={handleBack}> Atrás </Button>
                                            <Button variant="contained" className="btn-comprar-pasos" onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'} </Button>
                                        </div>
                                    </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                        {activeStep === steps.length && (
                        <Paper className="paper-comprar-pasos" square elevation={0}>
                            ¡Se concretó tu compra! Recibirás tu pedido a la brevedad.
                            <Button variant="contained" className="btn-comprar-pasos"  onClick={handleReset}> Reiniciar </Button>
                        </Paper>
                    )}
                </div>
            </div>
        </div>
        
    )
}