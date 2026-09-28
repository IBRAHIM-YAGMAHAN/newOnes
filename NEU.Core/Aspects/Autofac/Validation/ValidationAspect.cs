using Castle.DynamicProxy;
using FluentValidation;
using NEU.Core.CrossCuttingConcerns.Validation;
using NEU.Core.Utilities.Interceptors;
using NEU.Core.Utilities.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NEU.Core.Aspects.Autofac.Validation
{
    public class ValidationAspect : MethodInterception
    {
        private Type _validatorType;
        public ValidationAspect(Type validatorType)
        {
            if (!typeof(IValidator).IsAssignableFrom(validatorType))
            {
                throw new System.Exception(AspectMessages.WrongValidationType);
            }                              

            _validatorType = validatorType;
        }
        protected override void OnBefore(IInvocation invocation)
        {
            // IValidator tipinde bir nesne oluşturuyoruz
            var validator = Activator.CreateInstance(_validatorType);

            // IValidator’ın bağlı olduğu entity tipini alıyoruz
            var entityType = _validatorType.BaseType.GetGenericArguments()[0];

            // invocation içindeki argümanlardan entity tipinde olanları seçiyoruz
            var entities = invocation.Arguments.Where(t => t.GetType() == entityType);

            foreach (var entity in entities)
            {
                // Validator'u dynamic olarak kullanarak Validate metodunu çağırıyoruz
                ValidationTool.Validate((dynamic)validator, (dynamic)entity);
            }
        }
    }
}
