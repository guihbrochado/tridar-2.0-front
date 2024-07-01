import { toast } from 'react-toastify';

export default function validation(data: any, moduleSelect: any) {
    if (data.lesson === "") {
        toast.error("Por favor preencha o nome do aula.");
        return false;
    }    
    if (data.lesson.length > 200) {
        toast.error("O nome do aula não pode ter mais de 300 caracteres.");
        return false;
    }    
    if (!moduleSelect) {
        toast.error("Por favor preencha o curso.");
        return false;
    }     
    if (data.lessonnumber === "") {
        toast.error("Por favor preencha o número do aula.");
        return false;
    }
    if (data.duration === "") {
        toast.error("Por favor preencha o duração do aula.");
        return false;
    }
    if (data.link === "") {
        toast.error("Por favor preencha o link do aula.");
        return false;
    }
    if (data.link.length > 200) {
        toast.error("O link do aula não pode ter mais de 300 caracteres.");
        return false;
    }    
    if (data.description === "") {
        toast.error("Por favor preencha a descrição.");
        return false;
    }
    if (data.description.length > 1000) {
        toast.error("O link do aula não pode ter mais de 300 caracteres.");
        return false;
    }    

    return true
}