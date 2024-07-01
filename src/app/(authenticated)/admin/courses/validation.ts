import { toast } from 'react-toastify';

export default function validation(data: any, selectedFile: any, courseLevel: any, isFree: boolean) {
    if (data.course === "") {
        toast.error("Por favor preencha o nome do curso.");
        return false;
    }
    if (!selectedFile) {
        toast.error("Por favor preencha a capa do curso.");
        return false;
    }
    if (data.duration === "") {
        toast.error("Por favor preencha a duração.");
        return false;
    }
    if (!courseLevel) {
        toast.error("Por favor preencha o nível do curso.");
        return false;
    }
    if (data.price === "" && !isFree) {
        toast.error("Por favor preencha o preço.");
        return false;
    }
    if (data.expiration === "") {
        toast.error("Por favor preencha a data de expiração do curso.");
        return false;
    }
    if (data.description === "") {
        toast.error("Por favor preencha a descrição do curso.");
        return false;
    }

    return true
}