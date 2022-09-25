hello:
	echo "HELLO"

up araugrow:
	cd aws-node-http-api-project && sls offline

create-layer:
	cd layers && mkdir nodejs && cd nodejs && npm init -y
