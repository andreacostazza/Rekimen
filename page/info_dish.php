<?php
	require_once( "sparqllib.php" );
	
	$data = sparql_get(
						"http://www.linkedfood.org:8890/sparql/",
						"prefix lgdo: <http://linkedgeodata.org/ontology/>
						select ?restaurant ?dish 
						where {
								?link a lgdo:Restaurant . ?link rdfs:label ?restaurant . 
								?link gr:offers ?dish . ?dish rdfs:label ?dish_name}
						");
	
	if(!isset($data)){ 
		print sparql_errno() . ": " . sparql_error(). "\n"; 
		exit; 
	}
	foreach($data as $row){	
		
		$data_sparql[] = array( $data->fields()[0]=>$row[$data->fields()[0]],
								$data->fields()[1]=>$row[$data->fields()[1]]
						);
	}
	$json['results']=$data_sparql;
	$information=json_encode($json);
	echo $information;
?>
	