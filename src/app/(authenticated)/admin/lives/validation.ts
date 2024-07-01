import { toast } from 'react-toastify';

export default function validation(data: any, courseSelect: any) {
    if (data.module === "") {
        toast.error("Por favor preencha o nome do módulo.");
        return false;
    }    
    if (data.module.length > 300) {
        toast.error("O nome do módulo não pode ter mais de 300 caracteres.");
        return false;
    }    
    if (!courseSelect) {
        toast.error("Por favor preencha o curso.");
        return false;
    } 
    if (data.modulenumber === "") {
        toast.error("Por favor preencha o número do módulo.");
        return false;
    }

    return true
}