import axios from 'axios';

export const fetchArxivPapers = async () => {
  const query = 'au:Djebari_Faycal';
  const url = `https://export.arxiv.org/api/query?search_query=${query}&start=0&max_results=10`;

  try {
    const response = await axios.get(url);
    const parser = new DOMParser();
    const xml = parser.parseFromString(response.data, 'text/xml');
    const entries = Array.from(xml.getElementsByTagName('entry'));

    return entries.map(entry => ({
      title: entry.getElementsByTagName('title')[0].textContent,
      summary: entry.getElementsByTagName('summary')[0].textContent,
      published: entry.getElementsByTagName('published')[0].textContent,
      link: entry.getElementsByTagName('id')[0].textContent,
    }));
  } catch (error) {
    console.error('Error fetching arXiv papers:', error);
    return [];
  }
};
