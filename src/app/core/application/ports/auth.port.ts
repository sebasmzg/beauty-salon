import { ILoginRequest, ILoginResponse } from "../dto";

export interface PAuth {
    /**
     * 
     * @param req Es el objeto que contiene los datos necesarios para iniciar sesión
     */
    login(req: ILoginRequest): Promise<ILoginResponse>
}