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
		return fetch('/app/masters',{
			headers:{
				Accept:'application/json',
			}
		}).then(this.checkStatus)
		  .then(this.parseJSON)
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
	//Usa a função getMasters() do Client pra pegar a lista de masters e atualiza o state.
	loadMastersFromServer = () => {
		let cli = new Client();
		cli.getMasters((masters)=>{
			console.log(masters);
			this.setState({masters:masters});
		});
	}

	//O método de renderização, exigido pelo react
	render() {
		const mastersList = this.state.masters.map((currentMaster)=>(
		  <MasterPanel
		    key={currentMaster.id}
		  	master={currentMaster}
		  />
		));
		return(
		<div id='masterDashboard'>
			{mastersList}
		</div>
		);
	}
}

class MasterPanel extends React.Component
{
	render(){
		return(
			<div>
				<div> Nome = {this.props.master.nome}</div>
			</div>
		);
	}
}


ReactDOM.render(
  <MasterDashboard />,
  document.getElementById('content')
);
