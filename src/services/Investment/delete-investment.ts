import { API_URL } from '../../constants/apiUrl';

export default class DeleteInvestment {
  private route = `${API_URL}/investments`;

  public async delete(id: number): Promise<void> {
    const response = await fetch(`${this.route}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Erro ao excluir investimento');
  }
}
