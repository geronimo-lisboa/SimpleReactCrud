class Client{
	checkStatus = (response)=>{
	    if (response.status >= 200 && response.status < 300) {
	        return response;
	    } else {
	        const error = new Error(`HTTP Error ${response.statusText}`);
	        error.status = response.statusText;
	        error.response = response;
	        console.log(error);
	        throw error;
	    }		
	}
	
	parseJSON = (response)=>{
		return response.json();
	}
	
	getMasters = (success)=>{
		return fetch('/',{
			headers:{
				Accept:'application/json',
			}
		}).then(checkStatus)
		  .then(parseJSON)
		  .then(success);
	};
}

//Aqui guardarei a lista de masters.
class MasterDashboard extends React.Component{
	//O estado inicial é a lista de masters vazia.
	state = {
		masters:[],
	};
	//Invocada depois que o componente foi montado, requisita dados
	//do servidor e agenda uma comunicação com o servidor.
	componentDidMount(){
		this.loadMastersFromServer();
		setInterval(this.loadMastersFromServer, 5000);
	}
	
	loadMastersFromServer = () => {
		
	}
	
	//O método de renderização, exigido pelo react
	render() {
		return(
			<div>
				MasterDashboard
			</div>
		);
	}
}

ReactDOM.render(
  <MasterDashboard />,
  document.getElementById('content')
);
