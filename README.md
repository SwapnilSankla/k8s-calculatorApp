# k8s-calculatorApp
Simple JS calculator client and service app to explore docker and kubernetes concepts. Used Minikube to explore concepts.

1. <b>Service App</b>:
* It is JS Node application which is exposed as a Cluster IP service. Due to cluster IP service, this app is accessible only 
       inside the minikube.
* Three instances of the app is created via Deployment.


2. <b>Client App</b>
* Client App is again a JS Node application which is exposed as a NodePort service. Hence it is accessible even from outside of minikube
* Client App connects to the service app using service name. K8s takes care of resolving the service name to IP (DNS) 
