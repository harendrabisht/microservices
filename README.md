# Online Food Delivery App
###### This app is an aggregator platform for restaurant where restaurant can bring their food online. So Restaurant owner can register their food service online. Once it's verified, the admin can onboard the restaurant online and they can select the products and category. 
###### Customer can search the restaurant nearby hotel and can order foods
###### Once the Order is created, the delivery partner is assigned to deliver the order.

### Architecture
- Micro services
- Event based
- Micro Kernel

### Non Functional Requirement
- Scalability
- Maintainbility
- Persistance
- Performance

I am using Docker alogn with kubernates as Container Orchestrator. 
I used AWS as cloud provider and using Elastic Container Service.

![High level Diagram](https://tools.publicis.sapient.com/bitbucket/projects/TXSB/repos/harendra-bisht/browse/high-level-diagram.png)

For the starting i have created 2 microservices. One for the product service and another is user-service. Both the services is hosted on EKS cluster. The applicatation nodes are deployed under the namespace called `foodie`.
The manifest/configuation file to run the pods are in the respective folders.
For the database, i chose mongoDB for product service and user service. The reason of choosing mongoDB is primarily is Product does not have structured data like product can have multiple variants, addons, flavors etc. 

For mongoDB, i am running the mongo Container.
I have created product service image using the
> [DockerFile](https://tools.publicis.sapient.com/bitbucket/projects/TXSB/repos/harendra-bisht/browse/products-service/Dockerfile)

Product-service, pods deployed using deployment.
> [Product Service Deployment](https://tools.publicis.sapient.com/bitbucket/projects/TXSB/repos/harendra-bisht/browse/products-service/product-service.deployment.yaml)

Similarly, User-service container image is also created and deployed on same cluster.

```sh
kubectl get all --namespace=foodie
```
[https://tools.publicis.sapient.com/bitbucket/projects/TXSB/repos/harendra-bisht/browse/EKS%20Cluster.png](https://tools.publicis.sapient.com/bitbucket/projects/TXSB/repos/harendra-bisht/browse/EKS%20Cluster.png)

#### TDD Framework
- mocha
- chai
- sinon: enables us to create stubs, spies, mocks with any unit testing framework.
- rewire: provides us setter and getter functions to replace the original functions with our own.
- supertest 